declare type ChatMessage = {
  id?: string
  memberId: string
  groupId: string
  keyId?: string
  content: string
  createdAt?: string
}

declare type ChatMessageCreatRes = {
  id: string
  createdAt: string
}
