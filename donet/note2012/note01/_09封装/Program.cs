using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09封装
{
    class Program
    {
        static void Main(string[] args)
        {
            MyClass mc = new MyClass();
            //mc.Name = "aaa";
        }
    }
    class MyClass
    {
        private int _age;
        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }
}
