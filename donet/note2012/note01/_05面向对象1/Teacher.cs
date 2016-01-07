using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05面向对象1
{
    public class Teacher
    {
        public Teacher(string _name, int _age, int _height, double _salary)
        {
            this.Name = _name;
            this.Age = _age;
            this.Height = _height;
            this.Salary = _salary;
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
        public double Salary
        {
            get;
            set;
        }
    }
}
