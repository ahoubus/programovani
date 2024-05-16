using System.Security.Cryptography.X509Certificates;

namespace Kofola
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        public static string VyresProblem(int cenaVelkeho, int objemVelkeho, int cenaMaleho, int objemMaleho)
        {
            string vysledek = "NEVIM";

            if (cenaVelkeho / (float)objemVelkeho <= cenaMaleho / (float)objemMaleho) {
                vysledek = "VETSI";
            }
            else {
                vysledek = "MENSI";
            }

            return vysledek;
        }
    }
}
