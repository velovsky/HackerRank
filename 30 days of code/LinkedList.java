/*
* Day 15: Linked List: https://www.hackerrank.com/challenges/30-linked-list/problem
* Linked Lists exercise solved
*/

import java.io.*;
import java.util.*;

class Node 
{
	int data;
	Node next;
	
	Node(int d) 
	{
        data = d;
        next = null;
    }
}

class Solution 
{
	public static  Node insert(Node head,int data) 
	{
		//Complete this method
		Node newNode = new Node(data);
		//init
		if(head == null)
		{
				head = newNode;
				return head;
		}
		
		Node pointer = head;
		while(pointer != null)
		{
				if(pointer.next == null)
				{
						pointer.next = newNode;
						break;
				}
				else
						pointer = pointer.next;
		}
				
		return head;
	}


	public static void display(Node head) 
	{
			Node start = head;
			while(start != null) 
			{
					System.out.print(start.data + " ");
					start = start.next;
			}
	}

	public static void main(String args[]) 
	{
			Scanner sc = new Scanner(System.in);
			Node head = null;
			int N = sc.nextInt();

			while(N-- > 0) 
			{
					int ele = sc.nextInt();
					head = insert(head,ele);
			}
			display(head);
			sc.close();
	}
}
