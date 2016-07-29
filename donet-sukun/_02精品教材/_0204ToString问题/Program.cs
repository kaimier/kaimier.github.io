using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0204ToString问题
{
    class Program
    {
        static void Main(string[] args)
        {
           //我们将对象输出到控制台，默认是打印对象所在的类为命名空间
            int[] nums = { 1, 2, 3, 4, 5 };
            Person prop=new Person();
            Console.WriteLine(prop.ToString());
            Console.WriteLine(nums.ToString());
            Console.ReadKey();
        }
    }
    public class Person
    {
        public void SayHello()
        {
            Console.WriteLine("我是人类");
        }
    }
}
