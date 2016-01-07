using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace note01
{
    class Employee:Person
    {
        private double _salary; // crtl+r+e

        public double Salary
        {
            get { return _salary; }
            set { _salary = value; }
        }
        public override void SayHi()
        {
            Console.WriteLine("Hi... in Employee");
        }
    }
}
