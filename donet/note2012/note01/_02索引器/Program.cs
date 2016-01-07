using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02索引器
{
    class Program
    {
        static void Main(string[] args)
        {
            //int[] arr = new int[] { 1, 3, 5, 7, 9 };
            //string str = "ABCDEFG";
            ////
            //Console.WriteLine(str[3]);
            //Console.WriteLine(arr[0]);
            //Person p = new Person();
            //p[0] = 19;
            //Console.WriteLine(p[0]);
            //p[1] = "laosu";
            //Console.WriteLine(p[1]);
            //p[2] = "laosu@163.com";
            //Console.WriteLine(p[2]);
            //Console.WriteLine(p["age"]);
            //MyClass mc = new MyClass();
            //for (int i = 0; i <mc.Length; i++)
            //{
            //    Console.WriteLine(mc[i]);
            //}
            //ItcastClass ic = new ItcastClass();
            //for (int i = 0; i < ic.NameLength; i++)
            //{
            //    Console.WriteLine(ic[i]);
            //}
            Console.ReadKey();
        }
    }
    public class MyClass
    {
       private string[] _cars=new string[]{"奔驰","宝马","法拉利","福特","布加迪威龙"};

       public int Length
       {
           get
           {
               return _cars.Length;
           }
       }
       public string this[int index]
       {
           get {
               return _cars[index];
           }
           set {
               _cars[index] = value;
           }
       }

    }
    public class Person
    {

        //增加索引器，索引器的语法格式与类的属性语法格式很像


        private int _age;
        public object this[int index]
        {
            get{
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
            set{
                switch (index)
                {
                    case 0:
                        this._age = Convert.ToInt32(value);
                        break;
                    case 1:
                        this._name = value == null ? null : value.ToString();
                        break;
                    default:
                        this._email = value == null ? null : value.ToString();    break;
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
