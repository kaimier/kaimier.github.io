using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0203ArrayList的各种方法
{
    class Program
    {
        static void Main(string[] args)
        {
            ArrayList list = new ArrayList();
            list.Add(true);
            list.Add(1);
            list.Add("张三");
            list.AddRange(new int[] { 1, 2, 3, 4, 5 });
            list.AddRange(list);
            
            //list.Clear();//清空所有元素
            //list.Remove(true);//删除单个元素
            //list.RemoveAt(0);//根据下标删除元素
            //list.RemoveRange(0, 3);
            //list.Sort();//升序排列
            //list.Reverse();//反转
            //list.Insert(1, "插入的");
            //list.InsertRange(0, new string[] { "zs", "ls" });
            //bool b=list.Contains(1);
            //Console.WriteLine(b);
            list.Add("wisdom");
            if (!list.Contains("wisdom"))
            {
                list.Add("wisdom");
            }
            else
            {
                Console.WriteLine("已经有这个屌丝啦");
            }
            for (int i = 0; i < list.Count; i++)
            {
                Console.WriteLine(list[i]);
            }
            Console.ReadKey();
        }
    }
}
