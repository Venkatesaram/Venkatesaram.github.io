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
 * Servlet implementation class ListLeaguesListenerServlet
 */
@WebServlet("/ListLeaguesListenerServlet")
public class ListLeaguesListenerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ListLeaguesListenerServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		ArrayList<String> allLeaguesDatas = (ArrayList<String>)getServletContext().getAttribute("listenerSideArrayListAttribute");
		response.setContentType("text/html");
		PrintWriter o = response.getWriter();
		o.println("<h1>Below are the successfully created leagueCache</h1>");
		o.println("<ul>");
		
		for(String str:allLeaguesDatas) {
			o.println("<li>"+ str + "</li>");
		}
		
		o.println("</ul>");
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
