using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _20冒泡排序
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 冒泡排序
            int[] scores = { 18, 20, 48, 76, 20, 38, 87, 90, 37, 45, 65, 65, 34, 67, 95 };
            for (int i = 0; i < scores.Length - 1; i++) //控制比较趟数
            {
                for (int j = 0; j < scores.Length-1-i; j++)
                {
                    if(scores[j]<scores[j+1])
                    {
                        int temp = scores[j];
                        scores[j] = scores[j + 1];
                        scores[j + 1] = temp;
                    }
                }
            }
            for (int i = 0; i < scores.Length; i++)
            {
                Console.WriteLine(scores[i]);
            }
            Console.ReadKey();
            #endregion
        }
    }
}
