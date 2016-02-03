using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _024IntTryParse
{
    class Program
    {
        static void Main(string[] args)
        {
            string s = "123";
            int re;
            if (IntTryParse(s,out re))
            {
                Console.WriteLine("转换成功！"+re);
            }
            else
            {
                Console.WriteLine("转换失败！");
            }
            int[] nums={3,4,2,5,1,6,9};
            int max,min,sum;
            sum=compute(nums,out max, out min);
            Console.WriteLine("数组和为：{0}===最大值为：{1}===最小值为：{2}",sum,max,min);
            Console.ReadKey();
        }
        static int compute(int[] numbers, out int max, out int min)
        {
            int sum = 0;
            max = numbers[0];
            min = numbers[0];
            for (int i = 0; i < numbers.Length; i++)
            {
                sum += numbers[i];
                if (numbers[i]>max)
                {
                    max = numbers[i];
                }
                if (numbers[i]<min)
                {
                    min = numbers[i];
                }
            }
            return sum;
        }
        static bool IntTryParse(string s, out int result)
        {
            result = 0; // result必须赋值
            try
            {
                result = Convert.ToInt32(s);
                return true;
            }
            catch
            {
                return false ;
            }
        }

    }
}
