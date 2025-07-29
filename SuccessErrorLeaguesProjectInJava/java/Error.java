package sl314.servlet;

import jakarta.servlet.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;
import java.io.*;

/**
 * Servlet implementation class Error
 */
@WebServlet("/Error")
public class Error extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Error() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		ArrayList<String> errorMsgs = (ArrayList<String>)request.getAttribute("errorMsgsLinkToErrorServlet");
		
		response.setContentType("text/html");
		PrintWriter o = response.getWriter();
		o.println("<h1>Please fix the following errors</h1>");
		o.println("<ul>");
		
		for(String e:errorMsgs)
		{
			o.println("<li>"+ e + "</li>");
		}
		
		o.println("</ul>");
		o.println("<form action='formOne' method='GET'>\r\n"
				+ "<fieldset>\r\n"
				+ "<legend>Html-form</legend>\r\n"
				+ "\r\n"
				+ "<label>Year:</label><input type=\"text\" name=\"year\"/> <br>\r\n"
				+ "<label>Season:</label>\r\n"
				+ "<select name=\"season\">\r\n"
				+ "<option>UNKNOWN</option>\r\n"
				+ "<option>HTML</option>\r\n"
				+ "<option>CSS</option>\r\n"
				+ "<option>JAVASCRIPT</option>\r\n"
				+ "<option>JAVA</option>\r\n"
				+ "</select><br>\r\n"
				+ "<label>Title:</label>\r\n"
				+ "<input type=\"text\" name=\"title\"><br>\r\n"
				+ "\r\n"
				+ "<input type=\"submit\">\r\n"
				+ "\r\n"
				+ "</fieldset>\r\n"
				+ "</form>\r\n"
				+ "");
		
		
		
		
		
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
