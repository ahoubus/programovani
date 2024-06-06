using System.Runtime.InteropServices.Marshalling;
using System.Security.Principal;

namespace Ponozky
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        public static string VyresProblem(int n, int[] data)
        {
            int last_got;
            int missed;
            int vysledek = 0;

            List<int> list = new List<int>(data);

            int x = list[0];
            int index = -1;
            for (int i = 1; i < list.Count; i++)
            {
                int y = list[i];
                if (y == x)
                {
                    index = i;
                }
            }

            return vysledek.ToString();
        }
    }
}
