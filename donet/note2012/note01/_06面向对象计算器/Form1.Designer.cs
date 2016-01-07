namespace _06面向对象计算器
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.lblResult = new System.Windows.Forms.Label();
            this.result = new System.Windows.Forms.Button();
            this.cboCaozuoFu = new System.Windows.Forms.ComboBox();
            this.txtNumber2 = new System.Windows.Forms.TextBox();
            this.txtNumber1 = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // lblResult
            // 
            this.lblResult.AutoSize = true;
            this.lblResult.Location = new System.Drawing.Point(454, 172);
            this.lblResult.Name = "lblResult";
            this.lblResult.Size = new System.Drawing.Size(41, 12);
            this.lblResult.TabIndex = 8;
            this.lblResult.Text = "label1";
            // 
            // result
            // 
            this.result.Location = new System.Drawing.Point(378, 167);
            this.result.Name = "result";
            this.result.Size = new System.Drawing.Size(55, 23);
            this.result.TabIndex = 7;
            this.result.Text = "=";
            this.result.UseVisualStyleBackColor = true;
            this.result.Click += new System.EventHandler(this.button1_Click);
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
            this.cboCaozuoFu.Location = new System.Drawing.Point(172, 168);
            this.cboCaozuoFu.Name = "cboCaozuoFu";
            this.cboCaozuoFu.Size = new System.Drawing.Size(68, 20);
            this.cboCaozuoFu.TabIndex = 6;
            this.cboCaozuoFu.SelectedIndexChanged += new System.EventHandler(this.cboCaozuoFu_SelectedIndexChanged);
            // 
            // txtNumber2
            // 
            this.txtNumber2.Location = new System.Drawing.Point(271, 167);
            this.txtNumber2.Name = "txtNumber2";
            this.txtNumber2.Size = new System.Drawing.Size(100, 21);
            this.txtNumber2.TabIndex = 4;
            // 
            // txtNumber1
            // 
            this.txtNumber1.Location = new System.Drawing.Point(52, 168);
            this.txtNumber1.Name = "txtNumber1";
            this.txtNumber1.Size = new System.Drawing.Size(100, 21);
            this.txtNumber1.TabIndex = 5;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(547, 356);
            this.Controls.Add(this.lblResult);
            this.Controls.Add(this.result);
            this.Controls.Add(this.cboCaozuoFu);
            this.Controls.Add(this.txtNumber2);
            this.Controls.Add(this.txtNumber1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblResult;
        private System.Windows.Forms.Button result;
        private System.Windows.Forms.ComboBox cboCaozuoFu;
        private System.Windows.Forms.TextBox txtNumber2;
        private System.Windows.Forms.TextBox txtNumber1;
    }
}

