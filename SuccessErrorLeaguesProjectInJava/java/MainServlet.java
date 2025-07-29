package sl314.servlet;

import jakarta.servlet.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.*;
import java.util.*;

/**
 * Servlet implementation class MainServlet
 */
@WebServlet("/MainServlet")
public class MainServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		String yearString = request.getParameter("year");
		String season = request.getParameter("season");
		String title = request.getParameter("title");
		
		ArrayList<String> errorMsgs = new ArrayList<String>();
		
		int yearConvertInt = 0;
		try {
			yearConvertInt = Integer.parseInt(yearString);
			if(yearString.length() < 4 || yearString.length() > 4)
			{
				errorMsgs.add("Year must be a four number's only");
			}
			else if(yearConvertInt < 2020 || yearConvertInt > 2025)
			{
				errorMsgs.add("Year must be between 2020 and 2025 only");
			}
		}catch(NumberFormatException nfe)
		{
			errorMsgs.add("Year must be a number only allowed");
		}
		
		if(season.equals("UNKNOWN")) {
			errorMsgs.add("Please select the valid seasons");
		}
		if(title.isEmpty())
		{
			errorMsgs.add("Please enter the valid some title name");
		}
		
		if(!errorMsgs.isEmpty()) {
			RequestDispatcher rd = request.getRequestDispatcher("error.linkXmlConnection");
			request.setAttribute("errorMsgsLinkToErrorServlet",errorMsgs);
			rd.forward(request, response);
		}
		else {
			League l = new League(yearConvertInt,season,title);
			
			FileWriter fwObj = null;
			
			try {
				fwObj = new FileWriter("D:/ElicpseWorkSpace/MyServletFullInputBoxGetting/src/main/webapp/WEB-INF/leagues.txt",true);
				String getYST = yearConvertInt+","+season+","+title+"\n";
				fwObj.write(getYST);
				fwObj.flush();
			}catch(IOException io)
			{
				io.printStackTrace();
			}
			
			finally {
				try {
					fwObj.close();
				}
				catch(IOException io)
				{
					io.printStackTrace();
				}
			}
			
			RequestDispatcher successRd1 = request.getRequestDispatcher("success.linkXmlConnetion");
			request.setAttribute("LeagueSuccessServlet",l);
			successRd1.forward(request, response);
		}
		
		
		
		
		
		
		
		
		
		
//		response.setContentType("text/html");
//		PrintWriter o = response.getWriter();
//		
//		o.println("<h1>See the all inputs..Now get to outputs</h1>");
//		o.println("<ul>");
//		o.println("<li>"+ yearString + "</li>");
//		o.println("<li>"+ season + "</li>");
//		o.println("<li>"+ title + "</li>");
//		o.println("</ul>");
		
		
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
