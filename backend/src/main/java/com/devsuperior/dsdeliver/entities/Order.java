package com.devsuperior.dsdeliver.entities;

import java.time.Instant;

public class Order {
	
	private Long id;
	private String address;
	private Double latitude;
	private Double longitude;
	private Instant moment;
	private OrderStatus status;

}
