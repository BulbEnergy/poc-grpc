# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: account.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\raccount.proto\x12\x07\x61\x63\x63ount\"\'\n\x11GetAccountRequest\x12\x12\n\naccount_id\x18\x01 \x01(\x03\"\x96\x01\n\x12GetAccountResponse\x12\x12\n\naccount_id\x18\x01 \x01(\x03\x12%\n\tterritory\x18\x02 \x01(\x0e\x32\x12.account.Territory\x12\x14\n\x0cindustry_ids\x18\x03 \x03(\x03\x12\x12\n\x05\x65mail\x18\x04 \x01(\tH\x00\x88\x01\x01\x12\x11\n\tjoin_year\x18\x05 \x01(\x05\x42\x08\n\x06_email\".\n\x18StreamIndustryIdsRequest\x12\x12\n\naccount_id\x18\x01 \x01(\x03\"0\n\x19StreamIndustryIdsResponse\x12\x13\n\x0bindustry_id\x18\x01 \x01(\x03*.\n\tTerritory\x12\x06\n\x02GB\x10\x00\x12\x06\n\x02\x45S\x10\x01\x12\x06\n\x02\x46R\x10\x02\x12\t\n\x05US_TX\x10\x03\x32\xb2\x01\n\x07\x41\x63\x63ount\x12G\n\nGetAccount\x12\x1a.account.GetAccountRequest\x1a\x1b.account.GetAccountResponse\"\x00\x12^\n\x11StreamIndustryIds\x12!.account.StreamIndustryIdsRequest\x1a\".account.StreamIndustryIdsResponse\"\x00\x30\x01\x42*\n\x12uk.co.bulb.accountB\x0c\x41\x63\x63ountProtoP\x01\xa2\x02\x03RTGb\x06proto3')

_TERRITORY = DESCRIPTOR.enum_types_by_name['Territory']
Territory = enum_type_wrapper.EnumTypeWrapper(_TERRITORY)
GB = 0
ES = 1
FR = 2
US_TX = 3


_GETACCOUNTREQUEST = DESCRIPTOR.message_types_by_name['GetAccountRequest']
_GETACCOUNTRESPONSE = DESCRIPTOR.message_types_by_name['GetAccountResponse']
_STREAMINDUSTRYIDSREQUEST = DESCRIPTOR.message_types_by_name['StreamIndustryIdsRequest']
_STREAMINDUSTRYIDSRESPONSE = DESCRIPTOR.message_types_by_name['StreamIndustryIdsResponse']
GetAccountRequest = _reflection.GeneratedProtocolMessageType('GetAccountRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETACCOUNTREQUEST,
  '__module__' : 'account_pb2'
  # @@protoc_insertion_point(class_scope:account.GetAccountRequest)
  })
_sym_db.RegisterMessage(GetAccountRequest)

GetAccountResponse = _reflection.GeneratedProtocolMessageType('GetAccountResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETACCOUNTRESPONSE,
  '__module__' : 'account_pb2'
  # @@protoc_insertion_point(class_scope:account.GetAccountResponse)
  })
_sym_db.RegisterMessage(GetAccountResponse)

StreamIndustryIdsRequest = _reflection.GeneratedProtocolMessageType('StreamIndustryIdsRequest', (_message.Message,), {
  'DESCRIPTOR' : _STREAMINDUSTRYIDSREQUEST,
  '__module__' : 'account_pb2'
  # @@protoc_insertion_point(class_scope:account.StreamIndustryIdsRequest)
  })
_sym_db.RegisterMessage(StreamIndustryIdsRequest)

StreamIndustryIdsResponse = _reflection.GeneratedProtocolMessageType('StreamIndustryIdsResponse', (_message.Message,), {
  'DESCRIPTOR' : _STREAMINDUSTRYIDSRESPONSE,
  '__module__' : 'account_pb2'
  # @@protoc_insertion_point(class_scope:account.StreamIndustryIdsResponse)
  })
_sym_db.RegisterMessage(StreamIndustryIdsResponse)

_ACCOUNT = DESCRIPTOR.services_by_name['Account']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\022uk.co.bulb.accountB\014AccountProtoP\001\242\002\003RTG'
  _TERRITORY._serialized_start=318
  _TERRITORY._serialized_end=364
  _GETACCOUNTREQUEST._serialized_start=26
  _GETACCOUNTREQUEST._serialized_end=65
  _GETACCOUNTRESPONSE._serialized_start=68
  _GETACCOUNTRESPONSE._serialized_end=218
  _STREAMINDUSTRYIDSREQUEST._serialized_start=220
  _STREAMINDUSTRYIDSREQUEST._serialized_end=266
  _STREAMINDUSTRYIDSRESPONSE._serialized_start=268
  _STREAMINDUSTRYIDSRESPONSE._serialized_end=316
  _ACCOUNT._serialized_start=367
  _ACCOUNT._serialized_end=545
# @@protoc_insertion_point(module_scope)
