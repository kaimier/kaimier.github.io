using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0201里氏替换note
{
    class Program
    {
        static void Main(string[] args)
        {
            #region _01里氏转换
            /*
             * 1.子类可以赋值给父类
             * 2.如果父类中装的是子类对象，那么可以讲这个父类强转为子类对象
             * 3.is:成功true,失败false!
             *   as:成功返回对应的对象，失败返回null;
             */
            //Student s = new Student();
            //Person p = new Person();
            //Person p = s; //子类可以赋值给父类 
            Person p = new Student(); //1条
            Student ss = (Student)p;//2条

            if (p is Teacher)
            {
                Teacher ss1 = (Teacher)p;
                ss1.TeacherSayHello();
            }
            else
            {
                Console.WriteLine("转换失败");
            }
            Teacher t = p as Teacher;

            ss.StudentSayHello();
            string str = string.Join("|", new string[] { "1", "2", "3", "4" });
            Console.WriteLine(str);
            
            
            #endregion
            Console.ReadKey();
        }
    }
    public class Person
    {
        public void PersonSayHello()
        {
            Console.WriteLine("我是人类");
        }
    }
    public class Student : Person
    {
        public void StudentSayHello()
        {
            Console.WriteLine("我是学生");
        }
    }
    public class Teacher : Person
    {
        public void TeacherSayHello()
        {
            Console.WriteLine("我是老师");
        }
    }
}
