namespace WordCounterNS
{
    public class WordCounter
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            WordCounter counter = new WordCounter();
            Console.WriteLine("Input text:");
            string? text = Console.ReadLine();
            if (text == null) {
                Console.WriteLine("Error: No text given");
                return;
            }
            int count = counter.CountWords(text);
            Console.WriteLine($"The text has {count} words.");
        }

        bool isSpace(char c) {
            return char.IsWhiteSpace(c) || c is ',' or '.';
        }

        public int CountWords(string text)
        {
            int words = 0;
            int state = 0;

            foreach (char c in text)
            {
                if (state == 0) {
                    if (isSpace(c)) state = 0;
                    else {state = 1; words++;}
                }
                else {
                    if (isSpace(c)) state = 0;
                    else state = 2;
                }
            }

            return words;
        }
    }
}