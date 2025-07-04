package com.iuha.api.repository;

import com.iuha.api.entity.model.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, String>, ChatRoomRepositoryCustom {
}
