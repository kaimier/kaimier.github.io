using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _22读入一个整数
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("请输入你的年龄？");
            int age = ReadInt();
            Console.WriteLine("你刚刚输入的年龄为:{0}",age);
            Console.ReadKey();
        }
        public static int ReadInt()
        {
            int number = 0;
            do
            {
                try
                {
                    number = Convert.ToInt32(Console.ReadLine());
                    return number;
                }
                catch
                {
                    Console.WriteLine("输入有误，请重新输入！");
                }
            } while (true);
        }
    }
}
