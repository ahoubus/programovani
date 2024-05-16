namespace SecondLargest
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        public static int SecondLargest(int[] list)
        {       
            int lastX = 0;
            int lastXPos = 0;
            for (int i = 0; i < list.Length; i++)
            {
                int x = list[i];
                if (x > lastX) {
                    lastX = x;
                    lastXPos = i;
                }
            }

            int lastY = 0;
            for (int i = 0; i < list.Length; i++)
            {
                int y = list[i];
                if (y > lastY && i != lastXPos) {
                    lastY = y;
                }
            }
            return lastY;
        }

    
        public static int NthLargest(int[] list, int n)
        {
            return n;
        }
    }
}
