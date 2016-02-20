using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _017调试
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             * 设置断点-》单步运行-》观察变量
             */
            #region MyRegion
            //int i = 1;
            //while (i<10)
            //{
            //    Console.WriteLine("I Love You!");
            //    i++;
            //}
            #endregion
            #region for
            //int i = 0;
            //while(i<100)
            //{
            //    Console.WriteLine("{0}===下次我一定细心！",i);
            //    i++;
            //}
            #endregion
            #region 1->100的所有偶数和
            //int sum = 0;
            //for (int i = 1; i <=100; i++)
            //{
            //    if (i % 2==0)
            //    {
            //        sum = sum + i;
            //    }
            //}
            //Console.WriteLine("1-100的所有偶数和为{0}:",sum);
            #endregion
            #region 水仙花数是一个三位数 a*a*a+b*b*b+c*c*c=cba; 100-999
            for (int i = 100; i <= 999; i++)
            {
                int ge = i % 10;
                int shi = i / 10 % 10;
                int bei = i / 100;
                if (i == ge * ge * ge + shi * shi * shi + bei * bei * bei)
                {
                    Console.WriteLine(i); 
                }
            }
            #endregion
            Console.ReadKey();
        }
    }
}
