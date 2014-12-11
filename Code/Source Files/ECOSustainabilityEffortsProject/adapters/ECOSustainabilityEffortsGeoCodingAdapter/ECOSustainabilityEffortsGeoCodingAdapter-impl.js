/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *  	
 *  	// Optional 
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "javascript", "plain", "xml", "html"  
 *  	returnedContentEncoding : 'encoding', 
 *  	parameters: {name1: value1, ... }, 
 *  	headers: {name1: value1, ... }, 
 *  	cookies: {name1: value1, ... }, 
 *  	body: { 
 *  		contentType: 'text/xml; charset=utf-8' or similar value, 
 *  		content: stringValue 
 *  	}, 
 *  	transformation: { 
 *  		type: 'default', or 'xslFile', 
 *  		xslFile: fileName 
 *  	} 
 *  } 
 */

/**
 * 
 * @returns json list of items
 */
function getGmapLatLng(address) {
	WL.Logger.warn('getGmapLatLng');

    var input = {
        method : 'get',
        returnedContentType : 'json',
        path : 'maps/api/geocode/json',
        parameters : {
            'address' : address,
            'sensor' : 'false'   // hard-coded
        }
    };
    
	WL.Logger.warn(input);
	
    var response =  WL.Server.invokeHttp(input);
    
	WL.Logger.warn(response);
	
    var type = typeof response 
    
    if ('object' == type) {
        if (true == response['isSuccessful']) {
            
            // Drill down into the response object.
            var results = response['results'];
            var result = results[0];
            var geometry = result['geometry'];
            var location = geometry['location'];
            
            // Return JSON object with lat and lng.
            return location;
        }
        else {
            // Returning null. Web request was not successful.
            return null;
        }
    }
    else {
        // Returning null. Response is not an object.
        return null;
    }
}