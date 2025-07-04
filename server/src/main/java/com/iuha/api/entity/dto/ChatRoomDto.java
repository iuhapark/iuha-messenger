package com.iuha.api.entity.dto;

import com.iuha.api.entity.model.ChatRoom;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomDto {
    private String id;
    private String name;
    private List<UserDto> participants;
    private String lastMessage;
    private LocalDateTime updatedAt;

    public ChatRoomDto(ChatRoom chatRoom) {
        this.id = chatRoom.getId();
        this.participants = chatRoom.getParticipants().stream()
                .map(userRoom -> new UserDto(userRoom.getUser()))
                .toList();
        this.lastMessage = chatRoom.getLastMessage();
        this.updatedAt = chatRoom.getUpdatedAt();
    }

}