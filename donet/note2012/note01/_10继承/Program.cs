using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10继承
{
    class Program
    {
        static void Main(string[] args)
        {
            Student s = new Student();

            //子类 is a 父类（验证) 子类描述更详细，父类范围更广，更抽象。。。
        }
    }
    //继承好处:1.代码重用 2.多态
    //继承特性：1>单根性。【c#中不允许多继承，一个类只能继承自一个父类。】
    //          2>传递性。【没有父类就是Object】
    //Base Class->基类、Parent Class->父类
    //Derived Class->派生类、Child Class->子类
    class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public int Height { get; set; }
    }
    class Student:Person
    {        
        /// <summary>
        /// 学号
        /// </summary>
        public int Sno { get; set; }
    }
    class Teacher:Person
    {
        /// <summary>
        /// 工资
        /// </summary>
        public double Salary { get; set; }
    }
}
