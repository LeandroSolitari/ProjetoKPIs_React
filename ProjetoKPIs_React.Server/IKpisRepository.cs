using Microsoft.EntityFrameworkCore;

public interface IKpisRepository
{
    Task<IEnumerable<KpisOTIF>> GetDeliveryDataAsync();
    Task<IEnumerable<KpisOTIFok>> GetDeliveryDataAsyncOTIFResult(string parametro);


}

