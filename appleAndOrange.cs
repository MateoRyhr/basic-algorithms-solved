//Problem: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

class Result
{
    /*
     * Complete the 'countApplesAndOranges' function below.
     *
     * The function accepts following parameters:
     *  1. INTEGER s
     *  2. INTEGER t
     *  3. INTEGER a
     *  4. INTEGER b
     *  5. INTEGER_ARRAY apples
     *  6. INTEGER_ARRAY oranges
     */

    //print the number of apples and oranges that land on Sam's house, each on a separate line.
    public static void countApplesAndOranges(int s, int t, int a, int b, List<int> apples, List<int> oranges)
    {
        int applesOnSamsHouse = 0;
        int orangesOnSamsHouse = 0;

        foreach (var apple in apples)
        {
            int fallenApplePos = a + apple;
            if(fallenApplePos >= s && fallenApplePos <= t){     //if fallen apple is in the sam's house
                applesOnSamsHouse++;
            }
        }

        Console.WriteLine(applesOnSamsHouse);

        foreach (var orange in oranges)
        {
            int fallenOrangePos = b + orange;
            if(fallenOrangePos >= s && fallenOrangePos <= t){   //if fallen orange is in the sam's house
                orangesOnSamsHouse++;
            }
        }
        
        Console.WriteLine(orangesOnSamsHouse);
    }
}