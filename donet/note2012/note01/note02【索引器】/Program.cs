using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace note02_索引器_
{
    class Program
    {
        static void Main(string[] args)
        {
            //int[] arr = new int[] { 1, 3, 5, 7, 9 };
            //string str = "ABCDEFG";
            //Console.WriteLine(str[0]);
            //Console.WriteLine(arr[3]);

            Person p = new Person();
            p[0] = 19;
            p[1] = "张三";
            p[2] = "zhangsan@yahoo.com";
            Console.WriteLine(p["name"]);
            Console.WriteLine(p[3]);
            Console.WriteLine(p[1]);
            Console.WriteLine(p[0]);
            Console.ReadKey();
        }
    }

    public class Person
    {
        //增加一个索引器,语法格式与类的属性语法格式很像
        private int _age;
         public object this[int index]
                {
                    get
                    {
                        switch (index)
                        {
                            case 0:
                                return _age;
                            case 1:
                                return _name;
                            default:
                                return _email;
                        }
                    }
                    set
                    {
                        switch (index)
                        {
                            case 0:
                                this._age = Convert.ToInt32(value);
                                break;
                            case 1:
                                this._name = value == null ? null : value.ToString();
                                break;
                            default:
                                this._email = value == null ? null : value.ToString();
                                break;
                        }
                    }
                }

         public object this[string key]
         {
             get
             {
                 switch (key)
                 {
                     case "age":
                         return _age;
                     case "name":
                         return _name;
                     default:
                         return _email;
                 }
             }
             set
             {
                 switch (key)
                 {
                     case "age":
                         this._age = Convert.ToInt32(value);
                         break;
                     case "name":
                         this._name = value == null ? null : value.ToString();
                         break;
                     default:
                         this._email = value == null ? null : value.ToString();
                         break;
                 }

             }
         }
        private string _name;

        private string _email;
    }
}
