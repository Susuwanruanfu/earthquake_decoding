package com.example.disaster_decoding.Controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.disaster_decoding.Entity.Message;
import com.example.disaster_decoding.Mapper.MsgMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MsgController {
    @Autowired
    private MsgMapper msgMapper;

    @GetMapping("/getData")
    public List<Message> getData(){
//        QueryWrapper<Message> queryWrapper= new QueryWrapper<Message>();
//        queryWrapper.
        List<Message> msgList=msgMapper.selectList(null);
        System.out.println(msgList);
        return msgList;
    }

}
