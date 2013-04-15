/*
Robert Warren
Term 1304
Mobile Interface and Usability (MIU)
I Owe, I Owe * Bill List

Dropbox: https://www.dropbox.com/sh/03yhmwxv5pmms41/4XEl9oEfZ8
Github: https://github.com/grindnmosh/Warren_Robert_1304_MIU.git
URL: http://grind-design.com
*/

var sampleBills = {
	"srp": {
		"btype": ["Bill Type: ", "Utilities"],
		"bname": ["Bill Name: ", "SRP"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "68.00"],
		"due": ["Bill Due Date: ", "2013-04-23"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "Pay extra 30 to help with higher summer bills."]
	},
	"edu": {
		"btype": ["Bill Type: ", "Education"],
		"bname": ["Bill Name: ", "Student Loan"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "200.00"],
		"due": ["Bill Due Date: ", "2013-04-18"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "interest payment"]
	},
	"rent": {
		"btype": ["Bill Type: ", "Housing"],
		"bname": ["Bill Name: ", "Rent"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "850.00"],
		"due": ["Bill Due Date: ", "2013-05-01"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "pay via online portal"]
	},
	"hyandai": {
		"btype": ["Bill Type: ", "Vehicle"],
		"bname": ["Bill Name: ", "Hyandai Elantra"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "220.00"],
		"due": ["Bill Due Date: ", "2013-04-27"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "Wife's car"]
	},
	"honda": {
		"btype": ["Bill Type: ", "Vehicle"],
		"bname": ["Bill Name: ", "Honda Pilot"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "450.00"],
		"due": ["Bill Due Date: ", "2013-04-22"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "My car"]
	},
	"insurance": {
		"btype": ["Bill Type: ", "Vehicle"],
		"bname": ["Bill Name: ", "Progressive"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "644.00"],
		"due": ["Bill Due Date: ", "2013-04-13"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "both cars"]
	},
	"registration hyandai": {
		"btype": ["Bill Type: ", "Vehicle"],
		"bname": ["Bill Name: ", "Registration Hyandai Elantra"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "56.00"],
		"due": ["Bill Due Date: ", "2013-04-27"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "Wife's car 1 year registration"]
	},
	"registration honda": {
		"btype": ["Bill Type: ", "Vehicle"],
		"bname": ["Bill Name: ", "Registration Honda Pilot"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "450.00"],
		"due": ["Bill Due Date: ", "2013-04-27"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "My car 1 year registration"]
	},
	"gas": {
		"btype": ["Bill Type: ", "Utilities"],
		"bname": ["Bill Name: ", "SW Gas"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "13.68"],
		"due": ["Bill Due Date: ", "2013-04-12"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", " "]
	},
	"mesa": {
		"btype": ["Bill Type: ", "Utilities"],
		"bname": ["Bill Name: ", "City of Mesa"],
		"prio": ["Bill Priority: ", "4"],
		"amt": ["Bill Amount: $", "96.00"],
		"due": ["Bill Due Date: ", "2013-04-26"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", " "]
	},
	"net": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "CenturyLink"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "60.00"],
		"due": ["Bill Due Date: ", "2013-04-14"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "Paid"],
		"pdwith": ["Paid With: ", "Visa"],
		"ontime": ["On Time?: ", "On Time"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", " "]
	},
	"lawyer": {
		"btype": ["Bill Type: ", "Other"],
		"bname": ["Bill Name: ", "JD Denney"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "1303.26"],
		"due": ["Bill Due Date: ", "2013-03-14"],
		"freqs": ["Bill Frequency: ", "one time"],
		"pd": ["Paid: ", "Paid"],
		"pdwith": ["Paid With: ", "Check"],
		"ontime": ["On Time?: ", "On Time"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "paid in full."]
	},
	"loan": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "Cash Advance from work"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "1303.26"],
		"due": ["Bill Due Date: ", "2013-04-18"],
		"freqs": ["Bill Frequency: ", "one time"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N?A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "borrowed for gas money"]
	},
		"visa": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "Visa Card"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "48.00"],
		"due": ["Bill Due Date: ", "2013-04-18"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N?A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "minimum payment"]
	},
		"instrument": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "Viola"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "22.36"],
		"due": ["Bill Due Date: ", "2013-05-03"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N?A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "Alexis' viola rental"]
	},
	"proactiv": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "Proactiv"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "68.46"],
		"due": ["Bill Due Date: ", "2013-04-08"],
		"freqs": ["Bill Frequency: ", "quarterly"],
		"pd": ["Paid: ", "Paid"],
		"pdwith": ["Paid With: ", "Visa"],
		"ontime": ["On Time?: ", "On Time"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "Michael's"]
	},
	"redbox": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "Redbox"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "9.95"],
		"due": ["Bill Due Date: ", "2013-05-04"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N?A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "streaming"]
	},
	"tithe": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "Church Tithe"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "108.00"],
		"due": ["Bill Due Date: ", "2013-04-18"],
		"freqs": ["Bill Frequency: ", "biweekly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N?A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "regular tithe"]
	},
	"lichi": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "Lichi Super Fruit"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "99.95"],
		"due": ["Bill Due Date: ", "2013-05-02"],
		"freqs": ["Bill Frequency: ", "quarterly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N?A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "Wife's diet pills"]
	},
		"cell": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "T-Mobile"],
		"prio": ["Bill Priority: ", "1"],
		"amt": ["Bill Amount: $", "281.00"],
		"due": ["Bill Due Date: ", "2013-04-08"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "Paid"],
		"pdwith": ["Paid With: ", "Debit Card"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "Late"],
		"lfee": ["Late Fee?: ", "Late Fee"],
		"textArea": ["comments: ", "$6 added to next Bill"]
	}
}