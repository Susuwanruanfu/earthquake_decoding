package com.example.disaster_decoding.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.disaster_decoding.Entity.Message;
import org.springframework.stereotype.Repository;

@Repository
public interface MsgMapper extends BaseMapper<Message> {
}
