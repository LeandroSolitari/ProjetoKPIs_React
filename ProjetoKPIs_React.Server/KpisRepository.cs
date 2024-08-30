using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

public class KpisRepository : IKpisRepository
{
    private readonly AppDbContext _context;

    public KpisRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<KpisOTIF>> GetDeliveryDataAsync()
    {
        var results = new List<KpisOTIF>();

        using (var connection = _context.Database.GetDbConnection())
        {
            await connection.OpenAsync();

            using (var command = connection.CreateCommand())
            {
                command.CommandText = "select [Ordem Vendas] as OrdemVendas, [Data Criação OV] as DataCriacaoOV, [Target] as Target, [Data Embarque] as DataEmbarque from [View_DELIVERY_OTIF]";
                command.CommandType = System.Data.CommandType.Text;

                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        results.Add(new KpisOTIF
                        {
                            OrdemVendas = reader["OrdemVendas"].ToString(),
                            DataCriacaoOV = reader["DataCriacaoOV"].ToString(),
                            Target = reader["Target"].ToString(),
                            DataEmbarque = reader["DataEmbarque"].ToString(),
                        });
                    }
                }
            }
        }




        return results;
    }




    public async Task<IEnumerable<KpisOTIFok>> GetDeliveryDataAsyncOTIFResult(string parametro)
    {
        var results = new List<KpisOTIFok>();

        using (var connection = _context.Database.GetDbConnection())
        {
            await connection.OpenAsync();

            using (var command = connection.CreateCommand())
            {
                command.CommandText = "proc_KPI_Delivery"; // Nome da stored procedure
                command.CommandType = CommandType.StoredProcedure;

                // Adiciona o parâmetro para a stored procedure
                command.Parameters.Add(new SqlParameter
                {
                    ParameterName = "@case", // Nome do parâmetro na stored procedure
                    SqlDbType = SqlDbType.VarChar,
                    Size = 100,
                    Value = parametro ?? (object)DBNull.Value
                });

                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        results.Add(new KpisOTIFok
                        {
                            Resultado = reader["RESULT"].ToString()
                            
                        });
                    }
                }
            }
        }

        return results;
    }



}
