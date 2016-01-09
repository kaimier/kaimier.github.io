using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08变量作用域
{
    class Program
    {
        static void Main(string[] args)
        {
            M();
            M1();
            M2();
            Console.ReadKey();
        }
        static int n = 10;
        private static void M2()
        {
            n++;
            Console.WriteLine(n);
        }

        private static void M1()
        {
            n++;
            Console.WriteLine(n);
        }
       
        private static void M()
        {
            Console.WriteLine(n);
        }
    }
}
