using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0202ArrayList集合
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             * 集合：很多数据的集合
             * 数组：长度不可变，类型单一
             */
            ArrayList list = new ArrayList();
            list.Add(1);
            list.Add(3.14);
            list.Add(true);
            list.Add("wisdom");
            list.Add('S');
            list.Add(5000m);
            list.Add(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 });
            Person p = new Person();
            list.Add(p);
            list.Add(list);

            for (int i = 0; i < list.Count; i++)
            {
                if (list[i] is Person)
                {
                    ((Person)list[i]).SayHello();
                }
                Console.WriteLine(list[i]);
            }
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
