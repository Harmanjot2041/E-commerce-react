using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cSharp_practice
{
    class Program
    {
        class Area

        {
            double length;
            double width;
            public void AcceptDetails(double length , double width)
            {
                this.length = length;
                this.width = width;
            }
            public double GetArea()
            {
                return length * width;
            }
            
        }
        
        static void Main(string[] args)
        {
            Console.WriteLine(args);
            Area rectangle = new Area();
            double length = Convert.ToDouble(Console.ReadLine());
            double width = Convert.ToDouble(Console.ReadLine());
            rectangle.AcceptDetails(length,width);
            Console.WriteLine("Area of Rectangle is: " + rectangle.GetArea());
            int temp = 37;
            Console.WriteLine(temp.ToString());
            for(int i = 0;i <5;i++)
            {
                if (i == 3)
                {
                    continue;
                }
                Console.WriteLine(i);
               
            }
            
            int Factorial(int num)
            {
                int factorial = 1;
                for (int i = 1; i <= num; i++)
                {
                    factorial *= i;
                }
                return factorial;
            }

            int number = Convert.ToInt32(Console.ReadLine());
            int result = Factorial(number);
            Console.WriteLine("factorial of " + number + " is :" +  result);

            string[] data =
            {
                "harman",
                "harman1",
                "harman2",
                "harman3",
                "harmnn4"
            };
            Console.WriteLine("Foreach loop on string array :");
            foreach(var name in data)
            {
                Console.WriteLine(name);
            }
            Console.WriteLine(data);
            Console.ReadKey();
        }
    }
}
