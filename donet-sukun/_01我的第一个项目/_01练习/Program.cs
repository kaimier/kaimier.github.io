using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01练习
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 实现几天（eg:64day）是几周零几天
            //int days = 46;
            //int week = 46 / 7;
            //int day = 46 % 7;
            int days;
            Console.WriteLine("请输入你要计算的天数？");
            days = Convert.ToInt32(Console.ReadLine());
            int week = days / 7;
            int day = days % 7;
            Console.WriteLine("{0}天中有{1}周零{2}天",days,week,day);

            Console.ReadKey();
            #endregion
        }
    }
}
