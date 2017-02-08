var row = [];
$('#transactionsTable tr').each(
	function(c,item){
		row[c] = [];
		$(this).children('td').each(function(a,b){
			var childTds = $($(this).children('span'));
			if(childTds[0] !== undefined){
				childTd = $(childTds[0]);
				row[c][a] = "'"+childTd.text().toString().trim()+"'";
			}
		});
		if(row[c].length == 1){
			r = c;
			r = r-1;
			row[r][1] = row[r][1]+" RE:"+row[c][0].replace("'","");
			row[r][1] =  row[r][1].replace(/' RE:/," RE:");
		}

	}
);

$(row).each(function(index,item){
	if(item.length > 1){
		document.write(item.join(',')+" "+"<br/>\n");
	}
});
