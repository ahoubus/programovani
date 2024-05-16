using System.Security.Cryptography.X509Certificates;

class Heap
{
    List<int> list = new List<int>();

    public void Add(int val)
    {
        list.Add(val);

        int index = list.Count - 1;
        
        Swap2(index);
    }

    public int Remove()
    {
        throw new Exception();
    }

    int Parent(int i) => (i - 1) / 2;
    int Left(int i) => 2 * i + 1;
    int Right(int i) => 2 * i + 2;
    void Swap(int i, int j) => (list[i], list[j]) = (list[j], list[i]);

    void Swap2(int index)
    {
        if (index == 0) return;

        int parentIndex = Parent(index);
        int parent = list[parentIndex];

        if (list[index] > parent)
        {
            // Swap
            Swap(index, parentIndex);
            Swap2(parentIndex);
        }
    }
}