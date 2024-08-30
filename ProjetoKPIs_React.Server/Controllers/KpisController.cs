using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class KpisController : ControllerBase
{
    private readonly IKpisRepository _kpisRepository;

    public KpisController(IKpisRepository kpisRepository)
    {
        _kpisRepository = kpisRepository;
    }


    /// <summary>
    /// OTIF - Ordens de Venda.
    /// </summary>
    /// <returns>Retorna uma lista de ordens OTIF.</returns>
    [HttpGet("kpisOTIF")]
    public async Task<ActionResult<IEnumerable<KpisOTIF>>> Get()
    {
        var data = await _kpisRepository.GetDeliveryDataAsync();
        return Ok(data);
    }



    /// <summary>
    /// KPIS DELIVERY.
    /// </summary>
    /// <returns>Retorna o resultado Delivery.</returns>
    [HttpGet("kpisDELIVERY")]
    public async Task<ActionResult<IEnumerable<KpisOTIFok>>> Get(string parametro)
    {
        var data = await _kpisRepository.GetDeliveryDataAsyncOTIFResult(parametro);
        return Ok(data);
    }


}
