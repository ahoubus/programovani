using System.Security.Cryptography.X509Certificates;

namespace ZmenyPocasi
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        public static string VyresProblem(int[] data)
        {
            int bigest_dif = 0;
            int vysledek = bigest_dif;

            for (int i = 0; i < data.Length - 1; i++)
            {
                int x = data[i];
                int y = data[i + 1];
                int new_dif = Math.Abs(x - y);
                if (new_dif > bigest_dif) {
                    bigest_dif = new_dif;
                }
            }
            vysledek = bigest_dif;

            return vysledek.ToString();
        }
    }
}
