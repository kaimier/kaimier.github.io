namespace _03练习
{
    partial class Form2
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.txtNumber1 = new System.Windows.Forms.TextBox();
            this.cboCaozuoFu = new System.Windows.Forms.ComboBox();
            this.txtNumber2 = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.lblResult = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // txtNumber1
            // 
            this.txtNumber1.Location = new System.Drawing.Point(80, 136);
            this.txtNumber1.Name = "txtNumber1";
            this.txtNumber1.Size = new System.Drawing.Size(100, 21);
            this.txtNumber1.TabIndex = 0;
            this.txtNumber1.TextChanged += new System.EventHandler(this.txtNumber1_TextChanged);
            // 
            // cboCaozuoFu
            // 
            this.cboCaozuoFu.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboCaozuoFu.FormattingEnabled = true;
            this.cboCaozuoFu.Items.AddRange(new object[] {
            "请选择",
            "+",
            "-",
            "*",
            "/"});
            this.cboCaozuoFu.Location = new System.Drawing.Point(200, 136);
            this.cboCaozuoFu.Name = "cboCaozuoFu";
            this.cboCaozuoFu.Size = new System.Drawing.Size(68, 20);
            this.cboCaozuoFu.TabIndex = 1;
            this.cboCaozuoFu.SelectedIndexChanged += new System.EventHandler(this.cboCaozuoFu_SelectedIndexChanged);
            // 
            // txtNumber2
            // 
            this.txtNumber2.Location = new System.Drawing.Point(299, 135);
            this.txtNumber2.Name = "txtNumber2";
            this.txtNumber2.Size = new System.Drawing.Size(100, 21);
            this.txtNumber2.TabIndex = 0;
            this.txtNumber2.TextChanged += new System.EventHandler(this.txtNumber2_TextChanged);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(406, 135);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(55, 23);
            this.button1.TabIndex = 2;
            this.button1.Text = "=";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // lblResult
            // 
            this.lblResult.AutoSize = true;
            this.lblResult.Location = new System.Drawing.Point(482, 140);
            this.lblResult.Name = "lblResult";
            this.lblResult.Size = new System.Drawing.Size(41, 12);
            this.lblResult.TabIndex = 3;
            this.lblResult.Text = "label1";
            this.lblResult.Click += new System.EventHandler(this.lblResult_Click);
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(619, 425);
            this.Controls.Add(this.lblResult);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.cboCaozuoFu);
            this.Controls.Add(this.txtNumber2);
            this.Controls.Add(this.txtNumber1);
            this.Name = "Form2";
            this.Text = "Form2";
            this.Load += new System.EventHandler(this.Form2_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtNumber1;
        private System.Windows.Forms.ComboBox cboCaozuoFu;
        private System.Windows.Forms.TextBox txtNumber2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label lblResult;
    }
}