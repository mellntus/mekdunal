function Add(){
	if($("#txtName").val()=='')
	{
		alert('Kolom Nama tidak boleh kosong')
	}
	else
	{
		var client = JSON.stringify({
			ID    : uuidv4(),
			Name  : $("#txtName").val(),
			Email : $("#txtEmail").val(),
            Message : $("#txtMessage").val()
		});
		tbClients.push(client);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("The data was saved.");
		List()
		Clear()
	}
	// return true;
} 

function Edit(){
    
	tbClients[selected_index] = JSON.stringify({
			ID    : $("#txtID").val(),
			Name  : $("#txtName").val(),
			Email : $("#txtEmail").val(),
            Message : $("#txtMessage").val()
		});//Edit Data Yang Dipilih
	localStorage.setItem("tbClients", JSON.stringify(tbClients));
	alert("The data was edited.")
	operation = "A"; //Return default value
    List()
    Clear()
	// return true;
} 

function Delete(){

	var c = confirm('Apakah Yakin Data Ini Akan Di Hapus?')
	if(c)
	{
		tbClients.splice(selected_index, 1);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("Client deleted.");
		List();
		Clear()
	}
	
} 
function Clear()
{
    $("#txtID").val('');
	$("#txtName").val('');
	$("#txtEmail").val('');
    $("#txtMessage").val('');
	$("#txtID").prop("readonly",false);

	location.reload(true);
}
function List(){		
	$("#tblList").html("").attr("class", "table table-responsive table-hover border");
	$("#tblList").html(
		"<thead>"+
		"	<tr>"+
		"	<th scope='col' style='display:none;'>ID</th>"+
		"	<th scope='col'>Name</th>"+
		"	<th scope='col' style='display:none;'>Email</th>"+
        "   <th scope='col'>Message</th>"+
		"	<th scope='col'>Action</th>"+
		"	</tr>"+
		"</thead>"+
		"<tbody style='overflow-wrap:anywhere;'>"+
		"</tbody>"
		);
	for(var i in tbClients){
		var cli = JSON.parse(tbClients[i]);
	  	$("#tblList tbody").append("<tr>"+
			"<td style='display:none'>"+cli.ID+"</td>" + 
			"<td>"+cli.Name+"</td>" +  
			"<td style='display:none;'>"+cli.Email+"</td>" +
            "<td>"+cli.Message+"</td>" + 
			"<td><a style='cursor: pointer;' class='btnEdit' alt='Edit"+i+"' data-id='"+i+"'><span class='material-icons mx-2'>edit</span></a><a style='cursor: pointer;' class='btnDelete' alt='Delete"+i+"' data-id='"+i+"'><span class='material-icons'>delete</span></a></td>" + 
	  		"</tr>");
	}
} 
