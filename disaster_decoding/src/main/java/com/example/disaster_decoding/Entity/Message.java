package com.example.disaster_decoding.Entity;

import lombok.Data;

@Data
public class Message {
    private String id;
    private String date;
    private String address;
    private String source;
    private String carrier;
    private String classes;
    private String tag;
    private String description;
}
