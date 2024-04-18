using System.Net.Security;
using Microsoft.Win32.SafeHandles;

namespace EmptyProgram
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("type r for rock, p for paper and s for scissors !B!");
            string text = Console.ReadLine();

            if(text != "r" && text != "p" && text != "s" && text != "B") {
                Console.WriteLine("Error");
                return;
            }

            int randomNumber = Random.Shared.Next(0, 3);

            if ((randomNumber + 1) % 3 == input) {
                Console.WriteLine("WIN");
            }

            if (randomNumber % 3 == input) {
                Console.WriteLine("DRAW");
            }


            //if(randomNumber == 0) {
            //    if(text == "r") {
            //        Console.WriteLine("DRAW");
            //        Console.WriteLine("you played Rock and they played Rock");
            //    }
            //    if(text == "p") {
            //        Console.WriteLine("WIN");
            //        Console.WriteLine("you played Paper and they played Rock");
           //     }
            //    if(text == "s") {
            //        Console.WriteLine("LOSE");
            //        Console.WriteLine("you played Scissors and they played Rock");
            //    }
                
            //}

            //if(randomNumber == 1) {
            //    if(text == "r") {
            //        Console.WriteLine("LOSE");
            //        Console.WriteLine("you played Rock and they played Paper");
            //    }
            //    if(text == "p") {
            //        Console.WriteLine("DRAW");
            //        Console.WriteLine("you played Paper and they played Paper");
            //    }
            //    if(text == "s") {
            //        Console.WriteLine("WIN");
            //        Console.WriteLine("you played Scissors and they played Paper");
            //    }
            // }

            //if(randomNumber == 2) {
            //    if(text == "r") {
            //        Console.WriteLine("WIN");
            //        Console.WriteLine("you played Rock and they played Scissors");
            //    }
            //    if(text == "p") {
            //        Console.WriteLine("LOSE");
            //        Console.WriteLine("you played Paper and they played Scissors");
            //    }
            //    if(text == "s") {
            //        Console.WriteLine("DRAW");
            //        Console.WriteLine("you played Scissors and they played Scissors");
            //    }
            //}
            
            if(text == "B") {
                Console.WriteLine("☻☺WIN☺☻");
            }
        }
    }
}