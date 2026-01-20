using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Globalization;

using CurrencyConverter.App_Data;
using System.Web.UI.DataVisualization.Charting;

using System.Net;
using System.Web.Script.Serialization;
using System.Drawing;


namespace CurrencyConverter
{
    public partial class startpage : System.Web.UI.Page

    {
        static int gl_ind = 0;
        protected void Page_Load(object sender, EventArgs e)
        {

            // to ensure that this code will be executed only one time
            if (gl_ind == 0 )
            {
              gl_ind=1;
           
            // this code to fill dropdown lists with currency name as text and currency symbol as value
            // for example: currency name is "US Dollar" and currency value is "USD"
            FillWithISOCurrencySymbols(ddlfrom);
            FillWithISOCurrencySymbols(ddlto);

            // this code to select initial value in the dropdown list currency form
            ddlfrom.ClearSelection();
            ddlfrom.Items.FindByValue("GBP").Selected = true;
            
            // this code to select initial value in the dropdown list currency to
            ddlto.ClearSelection();
            ddlto.Items.FindByValue("GBP").Selected = true;
        }
 }
        // this method to fill dropdown list with currencies' names and symbols
        public static void FillWithISOCurrencySymbols(ListControl ctrl)
        {
            foreach (CultureInfo cultureInfo in CultureInfo.GetCultures(CultureTypes.SpecificCultures))
            {
                RegionInfo regionInfo = new RegionInfo(cultureInfo.LCID);
                if (ctrl.Items.FindByValue(regionInfo.ISOCurrencySymbol) == null)
                {
                    ctrl.Items.Add(new ListItem(regionInfo.CurrencyEnglishName, regionInfo.ISOCurrencySymbol));

                }

              }

        }


        protected void ConvertButton_Click(object sender, EventArgs e)
        {

            int temp = 0;
            //dont do anything unless a valid money amount has been entered in the money text box.
            if (!money_text_box.Text.Equals("") && Int32.TryParse(money_text_box.Text, out temp))
            {
                //  to declare that mywebService is webservice that we built which contains all the calculation logic
                WebService1 mywebService = new WebService1();
                //  to invoke Curr_converter which is part of mywebService 
                // and provid it with 3 required inputs (currency_from,currency_to and amount of money to be converted)
                TextBox1.Text = mywebService.Curr_converter(ddlfrom.SelectedValue, ddlto.SelectedValue, System.Convert.ToDecimal(money_text_box.Text));

                // to show the exchange rate for both currencies
                TextBox2.Text = "1 " + ddlfrom.SelectedValue + " = " + mywebService.get_rate_from_api(ddlfrom.SelectedValue, ddlto.SelectedValue) + " " + ddlto.SelectedValue;
                TextBox3.Text = "1 " + ddlto.SelectedValue + " = " + mywebService.get_rate_from_api(ddlto.SelectedValue, ddlfrom.SelectedValue) + " " + ddlfrom.SelectedValue; ;
                //make the result visible
                TextBox1.Visible = true;
                TextBox2.Visible = true;
                TextBox3.Visible = true;
                //only call the chart method if two different currencies has been entered, otherwise hide the chart
                if (ddlto.SelectedIndex != ddlfrom.SelectedIndex) addChart(ddlfrom.SelectedValue, ddlto.SelectedValue);
                else chart1.Visible = false;
            }
            else
            {
                //hide the textboxes if no valid amount has been entered
                TextBox1.Visible = false;
                TextBox2.Visible = false;
                TextBox3.Visible = false;
            }

        }

        protected void money_text_box_TextChanged(object sender, EventArgs e)
        {
            decimal d;
            if (decimal.TryParse(money_text_box.Text, out d))
            {
                //valid 
                TextBox4.Text = "";
            }
            else
            {
                //invalid                
                TextBox4.Text = "Enter valid amount";
                TextBox1.Text = "";
                TextBox2.Text = "";
                TextBox3.Text = "";
                money_text_box.Text = "";
                money_text_box.Focus();

                return;
            }
        }

        

        // to swap the currencies
        protected void Swap_Click(object sender, EventArgs e)
        {
            // save the current selected index of dropdown list in index
            int index = ddlfrom.SelectedIndex;
            // swap the currencies
            ddlfrom.SelectedIndex = ddlto.SelectedIndex;
            // use saved index
            ddlto.SelectedIndex = index;

            TextBox1.Text = "";
            TextBox2.Text = "";
            TextBox3.Text = "";
        }


        private void addChart(string from, string to)
        {
            //clear all existing chart areas and series
            chart1.Series.Clear();
            chart1.ChartAreas.Clear();
            //add new chart area and series for the new graph
            chart1.Series.Add("Series1");
            chart1.Series["Series1"].ChartType = SeriesChartType.Line;
            chart1.ChartAreas.Add("ChartArea1");

            //use web service to get the results to plot
            WebService1 mywebService = new WebService1();
            CurrencyElement[] result = mywebService.createChart(from, to);

            //add each data point and label to the series
            foreach (CurrencyElement obj in result)
            {
                DateTime date = (DateTime)obj.AxisX;
                double rate = obj.AxisY;
                chart1.Series["Series1"].Points.AddXY(date.Date, rate);
            }

            //adjust the appearance of the graph plot
            chart1.ChartAreas["ChartArea1"].AxisX.Maximum = ((DateTime)result[result.GetLength(0) - 1].AxisX).ToOADate();
            chart1.ChartAreas["ChartArea1"].AxisX.Minimum = ((DateTime)result[0].AxisX).ToOADate();
            chart1.ChartAreas["ChartArea1"].AxisX.IntervalType = DateTimeIntervalType.Months;
            chart1.ChartAreas["ChartArea1"].AxisX.Interval = 1;

            //and add a titel to it
            chart1.Titles.Add(
                new Title(from + " to " + to + " currency changes over the past year",
                    Docking.Top,
                    new Font("Times New Roman", 12, FontStyle.Bold),
                    Color.Red)
                );

            //lastly make the graph visible for the user 
            chart1.Visible = true;
        }

        //had to be here for some reason
        protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        
    }


}

    



    