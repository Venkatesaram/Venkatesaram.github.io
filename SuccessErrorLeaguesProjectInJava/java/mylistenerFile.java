package sl314.servlet;

import jakarta.servlet.*;
import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;
import java.io.*;
import java.util.*;

/**
 * Application Lifecycle Listener implementation class mylistenerFile
 *
 */
@WebListener
public class mylistenerFile implements ServletContextListener {

    /**
     * Default constructor. 
     */
    public mylistenerFile() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent sce)  { 
         // TODO Auto-generated method stub
    	ServletContext sc = sce.getServletContext();
    	String filePathXmlLeaguesListenerLinkFile = sc.getInitParameter("LeaguesFileConnectionNameInListenerServlet");
    	InputStream isObj =sc.getResourceAsStream(filePathXmlLeaguesListenerLinkFile);
    	InputStreamReader isrObj = null;
    	BufferedReader brObj = null;
    	
    	ArrayList<String> leaguesCache = new ArrayList<String>();
    	try {
    		isrObj = new InputStreamReader(isObj);
    		brObj = new BufferedReader(isrObj);
    		
    		String str=null;
    		
    		while((str = brObj.readLine())!=null)
    		{
    			leaguesCache.add(str);
    		}
    		
    		
    	}catch(IOException io)
    	{
    		io.printStackTrace();
    	}
    	finally {
    		try {
    			brObj.close();
    			isObj.close();
    			isrObj.close();
    		}
    		catch(IOException io)
    		{
    			io.printStackTrace();
    		}
    	}
    	
    	
    	sc.setAttribute("listenerSideArrayListAttribute", leaguesCache);
    	
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent sce)  { 
         // TODO Auto-generated method stub
    }
	
}
