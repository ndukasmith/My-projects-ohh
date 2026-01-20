using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CurrencyConverter.App_Data
{
    //A class for storing the data point that is to be inserted into the currency chart. 
    public class CurrencyElement
    {
        
        //the value on the x axis
        private object axisX;

        public object AxisX
        {
            get { return axisX; }
            set { axisX = value; }
        }

        //the currency value on the y axis
        private double axisY;

        public double AxisY
        {
            get { return axisY; }
            set { axisY = value; }
        }

        public void setXY(object X, double Y)
        {
            this.axisX = X;
            this.axisY = Y;
        }

    }
}