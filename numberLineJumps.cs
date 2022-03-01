//Problem: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

class Result
{

    /*
     * Complete the 'kangaroo' function below.
     * x = pos
     * v = jump distance
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. INTEGER x1
     *  2. INTEGER v1
     *  3. INTEGER x2
     *  4. INTEGER v2
     */

    /*You have to figure out a way to get both kangaroos at the
    same location at the same time as part of the show.

    If it is possible, return YES, otherwise return NO.*/
    public static string kangaroo(int x1, int v1, int x2, int v2)
    {
        //this pass all test

        while(x1 < 999999999 && x2 < 999999999){
            x1 += v1;
            x2 += v2;
            if(x1 == x2) return "YES";
        }
        return "NO";

        /*
        second solution - this solution does not pass all tests

        // //if they start at the same position
        // if(x1 == x2) return "YES";
        // //if kangaroo 1 is further AND jump more return yes
        // if((x2+v2) % (x1+v1) == 0 && v1 > v2) return "YES";
        // //is kangaroo 2 is further AND jump more return yes
        // if((x1+v1) % (x2+v2) == 0 && v2 > v1) return "YES";
        
        // return "NO";

        */

        /*

        first solution - this solution does not pass all tests

        if(((x1+v1) % (x2+v2)) == 0 || ((x2+v2) % (x1+v1)) == 0){ //if they are divisible by each other
            if(x1 == x2 || (x1 < x2 && v1 > v2) || (x2 < x1 && v2 > v1)){
                return "YES";
            }else{
                return "NO";
            }
        }else{
            return = "NO";
        }

        */
    }

}