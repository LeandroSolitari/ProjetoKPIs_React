using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<KpisOTIF> KpisOTIF { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<KpisOTIF>()
            .HasNoKey(); // Marcar a entidade como sem chave
    }


    public DbSet<KpisOTIF> KpisOTIFok { get; set; }


}
