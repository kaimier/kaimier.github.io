using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05面向对象1
{
    public class Student
    {
        //1.编写完一个类后，这个类默认有一个无参的构造函数
        //2.只要手动为该为增加一个构造函数后，会自动将原有的无参数的构造函数覆盖
        //3.构造函数特点：
            //1>函数名称与类名完全一致
            //2>构造函数没有任何返回值 ，哪怕是void也不能写
            //3>一般情况下，构造函数的访问修饰符是public(单例模式)
            //4>构造函数也是可以生载的
            //5>编写完类后，有一个默认的元参数的构造函数
        public Student()
        {

        }
        public Student(string name)
        {

        }
        public Student(string name, int age)
        {

        }
        public Student(string name, int age, int height)
        {
            //通过构造函数初始化类成员
            this.Name = name;
            this.Age = age;
            this.Height = height;
        }
        public string Name
        {
            get;
            set;
        }
        public int Age
        {
            get;
            set;
        }
        public int Height
        {
            get;
            set;
        }
        /// <summary>
        /// 学号
        /// </summary>
        public string SNo
        {
            get;
            set;
        }
    }
}
