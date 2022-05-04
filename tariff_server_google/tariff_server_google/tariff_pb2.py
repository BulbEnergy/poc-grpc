"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database

_sym_db = _symbol_database.Default()
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2

DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(
    b'\n\x0ctariff.proto\x12\x0ebulb.tariff.v1\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1egoogle/protobuf/wrappers.proto\x1a google/protobuf/field_mask.proto"\x14\n\x12ListTariffsRequest">\n\x13ListTariffsResponse\x12\'\n\x07tariffs\x18\x01 \x03(\x0b2\x16.bulb.tariff.v1.Tariff"\x8c\x01\n\x16BatchGetTariffsRequest\x12\x12\n\ntariff_ids\x18\x01 \x03(\t\x12,\n\nfuel_types\x18\x03 \x03(\x0e2\x18.bulb.tariff.v1.FuelType\x120\n\x0ctariff_types\x18\x04 \x03(\x0e2\x1a.bulb.tariff.v1.TariffType"B\n\x17BatchGetTariffsResponse\x12\'\n\x07tariffs\x18\x01 \x03(\x0b2\x16.bulb.tariff.v1.Tariff"%\n\x10GetTariffRequest\x12\x11\n\ttariff_id\x18\x01 \x01(\t"n\n\x13UpdateTariffRequest\x12&\n\x06tariff\x18\x01 \x01(\x0b2\x16.bulb.tariff.v1.Tariff\x12/\n\x0bupdate_mask\x18\x02 \x01(\x0b2\x1a.google.protobuf.FieldMask"q\n\x18GetRatesForTariffRequest\x12\x11\n\ttariff_id\x18\x01 \x01(\t\x12,\n\nfuel_types\x18\x02 \x03(\x0e2\x18.bulb.tariff.v1.FuelType\x12\x14\n\x0cregion_codes\x18\x03 \x03(\t"w\n\x1aPriceChangeTariffPricePack\x12\x17\n\x0fprice_change_id\x18\x01 \x01(\t\x12\x11\n\ttariff_id\x18\x02 \x01(\t\x12-\n\nprice_pack\x18\x03 \x01(\x0b2\x19.bulb.tariff.v1.PricePack"\xe4\x03\n\x06Tariff\x12\x11\n\ttariff_id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12,\n\nfuel_types\x18\x03 \x03(\x0e2\x18.bulb.tariff.v1.FuelType\x125\n\x0epayment_method\x18\x04 \x01(\x0e2\x1d.bulb.tariff.v1.PaymentMethod\x12/\n\x0btariff_type\x18\x05 \x01(\x0e2\x1a.bulb.tariff.v1.TariffType\x12=\n\x12publication_status\x18\x06 \x01(\x0e2!.bulb.tariff.v1.PublicationStatus\x122\n\x0eavailable_from\x18\x07 \x01(\x0b2\x1a.google.protobuf.Timestamp\x125\n\x0cavailable_to\x18\x08 \x01(\x0b2\x1a.google.protobuf.TimestampH\x00\x88\x01\x01\x120\n\x08features\x18\t \x01(\x0b2\x1e.bulb.tariff.v1.TariffFeatures\x126\n\x10legacy_reference\x18\n \x01(\x0b2\x1c.google.protobuf.StringValueB\x0f\n\r_available_to"f\n\x0eTariffFeatures\x12\x18\n\x10rate_start_times\x18\x01 \x03(\t\x12:\n\x18standing_charge_interval\x18\x02 \x01(\x0e2\x18.bulb.tariff.v1.Interval"\xce\x02\n\tPricePack\x12\x13\n\x0bregion_code\x18\x01 \x01(\t\x12+\n\tfuel_type\x18\x02 \x01(\x0e2\x18.bulb.tariff.v1.FuelType\x12A\n\x1dexisting_members_effective_at\x18\x03 \x01(\x0b2\x1a.google.protobuf.Timestamp\x12<\n\x18new_members_effective_at\x18\x04 \x01(\x0b2\x1a.google.protobuf.Timestamp\x12,\n\nunit_rates\x18\x05 \x03(\x0b2\x18.bulb.tariff.v1.UnitRate\x12<\n\x0fstanding_charge\x18\x06 \x01(\x0b2\x1e.bulb.tariff.v1.StandingChargeH\x00\x88\x01\x01B\x12\n\x10_standing_charge"e\n\x08UnitRate\x12\r\n\x05cents\x18\x01 \x01(\x01\x12"\n\x04unit\x18\x02 \x01(\x0e2\x14.bulb.tariff.v1.Unit\x12\x17\n\nstart_time\x18\x03 \x01(\tH\x00\x88\x01\x01B\r\n\x0b_start_time"K\n\x0eStandingCharge\x12\r\n\x05cents\x18\x01 \x01(\x01\x12*\n\x08interval\x18\x02 \x01(\x0e2\x18.bulb.tariff.v1.Interval"\x89\x03\n\x0bPriceChange\x12\x17\n\x0fprice_change_id\x18\x01 \x01(\t\x12.\n\ncreated_at\x18\x02 \x01(\x0b2\x1a.google.protobuf.Timestamp\x12A\n\x1dexisting_members_effective_at\x18\x03 \x01(\x0b2\x1a.google.protobuf.Timestamp\x12<\n\x18new_members_effective_at\x18\x04 \x01(\x0b2\x1a.google.protobuf.Timestamp\x125\n\x0cpublished_at\x18\x05 \x01(\x0b2\x1a.google.protobuf.TimestampH\x00\x88\x01\x01\x12\'\n\x07reviews\x18\x06 \x03(\x0b2\x16.bulb.tariff.v1.Review\x12?\n\x13orchestration_steps\x18\x07 \x01(\x0b2".bulb.tariff.v1.OrchestrationStepsB\x0f\n\r_published_at",\n\x06Review\x12\x10\n\x08reviewer\x18\x01 \x01(\t\x12\x10\n\x08approved\x18\x02 \x01(\x08"u\n\x12OrchestrationSteps\x12\x17\n\x0fjunifer_updated\x18\x01 \x01(\x08\x12\x14\n\x0cpcws_updated\x18\x02 \x01(\x08\x12\x12\n\ncomms_sent\x18\x03 \x01(\x08\x12\x1c\n\x14pay_review_completed\x18\x04 \x01(\x08*6\n\x08FuelType\x12\x10\n\x0cUNKNOWN_FUEL\x10\x00\x12\x0f\n\x0bELECTRICITY\x10\x01\x12\x07\n\x03GAS\x10\x02*9\n\nTariffType\x12\x12\n\x0eUNKNOWN_TARIFF\x10\x00\x12\x0c\n\x08VARIABLE\x10\x01\x12\t\n\x05FIXED\x10\x02*b\n\x11PublicationStatus\x12\x12\n\x0eUNKNOWN_STATUS\x10\x00\x12\x16\n\x12UNDER_CONSTRUCTION\x10\x01\x12\t\n\x05DRAFT\x10\x02\x12\x08\n\x04LIVE\x10\x03\x12\x0c\n\x08ARCHIVED\x10\x04*=\n\rPaymentMethod\x12\x1a\n\x16UNKNOWN_PAYMENT_METHOD\x10\x00\x12\x10\n\x0cDIRECT_DEBIT\x10\x01*6\n\x08Interval\x12\x14\n\x10UNKNOWN_INTERVAL\x10\x00\x12\t\n\x05NEVER\x10\x01\x12\t\n\x05DAILY\x10\x02*!\n\x04Unit\x12\x10\n\x0cUNKNOWN_UNIT\x10\x00\x12\x07\n\x03KWH\x10\x012\xb3\x04\n\rTariffService\x12X\n\x0bListTariffs\x12".bulb.tariff.v1.ListTariffsRequest\x1a#.bulb.tariff.v1.ListTariffsResponse"\x00\x12d\n\x0fBatchGetTariffs\x12&.bulb.tariff.v1.BatchGetTariffsRequest\x1a\'.bulb.tariff.v1.BatchGetTariffsResponse"\x00\x12G\n\tGetTariff\x12 .bulb.tariff.v1.GetTariffRequest\x1a\x16.bulb.tariff.v1.Tariff"\x00\x12M\n\x0cUpdateTariff\x12#.bulb.tariff.v1.UpdateTariffRequest\x1a\x16.bulb.tariff.v1.Tariff"\x00\x12_\n\x14StreamRatesForTariff\x12(.bulb.tariff.v1.GetRatesForTariffRequest\x1a\x19.bulb.tariff.v1.PricePack"\x000\x01\x12i\n\x1fStreamUpdateRatesForPriceChange\x12*.bulb.tariff.v1.PriceChangeTariffPricePack\x1a\x16.google.protobuf.Empty"\x00(\x01b\x06proto3'
)
_FUELTYPE = DESCRIPTOR.enum_types_by_name["FuelType"]
FuelType = enum_type_wrapper.EnumTypeWrapper(_FUELTYPE)
_TARIFFTYPE = DESCRIPTOR.enum_types_by_name["TariffType"]
TariffType = enum_type_wrapper.EnumTypeWrapper(_TARIFFTYPE)
_PUBLICATIONSTATUS = DESCRIPTOR.enum_types_by_name["PublicationStatus"]
PublicationStatus = enum_type_wrapper.EnumTypeWrapper(_PUBLICATIONSTATUS)
_PAYMENTMETHOD = DESCRIPTOR.enum_types_by_name["PaymentMethod"]
PaymentMethod = enum_type_wrapper.EnumTypeWrapper(_PAYMENTMETHOD)
_INTERVAL = DESCRIPTOR.enum_types_by_name["Interval"]
Interval = enum_type_wrapper.EnumTypeWrapper(_INTERVAL)
_UNIT = DESCRIPTOR.enum_types_by_name["Unit"]
Unit = enum_type_wrapper.EnumTypeWrapper(_UNIT)
UNKNOWN_FUEL = 0
ELECTRICITY = 1
GAS = 2
UNKNOWN_TARIFF = 0
VARIABLE = 1
FIXED = 2
UNKNOWN_STATUS = 0
UNDER_CONSTRUCTION = 1
DRAFT = 2
LIVE = 3
ARCHIVED = 4
UNKNOWN_PAYMENT_METHOD = 0
DIRECT_DEBIT = 1
UNKNOWN_INTERVAL = 0
NEVER = 1
DAILY = 2
UNKNOWN_UNIT = 0
KWH = 1
_LISTTARIFFSREQUEST = DESCRIPTOR.message_types_by_name["ListTariffsRequest"]
_LISTTARIFFSRESPONSE = DESCRIPTOR.message_types_by_name["ListTariffsResponse"]
_BATCHGETTARIFFSREQUEST = DESCRIPTOR.message_types_by_name["BatchGetTariffsRequest"]
_BATCHGETTARIFFSRESPONSE = DESCRIPTOR.message_types_by_name["BatchGetTariffsResponse"]
_GETTARIFFREQUEST = DESCRIPTOR.message_types_by_name["GetTariffRequest"]
_UPDATETARIFFREQUEST = DESCRIPTOR.message_types_by_name["UpdateTariffRequest"]
_GETRATESFORTARIFFREQUEST = DESCRIPTOR.message_types_by_name["GetRatesForTariffRequest"]
_PRICECHANGETARIFFPRICEPACK = DESCRIPTOR.message_types_by_name[
    "PriceChangeTariffPricePack"
]
_TARIFF = DESCRIPTOR.message_types_by_name["Tariff"]
_TARIFFFEATURES = DESCRIPTOR.message_types_by_name["TariffFeatures"]
_PRICEPACK = DESCRIPTOR.message_types_by_name["PricePack"]
_UNITRATE = DESCRIPTOR.message_types_by_name["UnitRate"]
_STANDINGCHARGE = DESCRIPTOR.message_types_by_name["StandingCharge"]
_PRICECHANGE = DESCRIPTOR.message_types_by_name["PriceChange"]
_REVIEW = DESCRIPTOR.message_types_by_name["Review"]
_ORCHESTRATIONSTEPS = DESCRIPTOR.message_types_by_name["OrchestrationSteps"]
ListTariffsRequest = _reflection.GeneratedProtocolMessageType(
    "ListTariffsRequest",
    (_message.Message,),
    {"DESCRIPTOR": _LISTTARIFFSREQUEST, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(ListTariffsRequest)
ListTariffsResponse = _reflection.GeneratedProtocolMessageType(
    "ListTariffsResponse",
    (_message.Message,),
    {"DESCRIPTOR": _LISTTARIFFSRESPONSE, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(ListTariffsResponse)
BatchGetTariffsRequest = _reflection.GeneratedProtocolMessageType(
    "BatchGetTariffsRequest",
    (_message.Message,),
    {"DESCRIPTOR": _BATCHGETTARIFFSREQUEST, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(BatchGetTariffsRequest)
BatchGetTariffsResponse = _reflection.GeneratedProtocolMessageType(
    "BatchGetTariffsResponse",
    (_message.Message,),
    {"DESCRIPTOR": _BATCHGETTARIFFSRESPONSE, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(BatchGetTariffsResponse)
GetTariffRequest = _reflection.GeneratedProtocolMessageType(
    "GetTariffRequest",
    (_message.Message,),
    {"DESCRIPTOR": _GETTARIFFREQUEST, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(GetTariffRequest)
UpdateTariffRequest = _reflection.GeneratedProtocolMessageType(
    "UpdateTariffRequest",
    (_message.Message,),
    {"DESCRIPTOR": _UPDATETARIFFREQUEST, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(UpdateTariffRequest)
GetRatesForTariffRequest = _reflection.GeneratedProtocolMessageType(
    "GetRatesForTariffRequest",
    (_message.Message,),
    {"DESCRIPTOR": _GETRATESFORTARIFFREQUEST, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(GetRatesForTariffRequest)
PriceChangeTariffPricePack = _reflection.GeneratedProtocolMessageType(
    "PriceChangeTariffPricePack",
    (_message.Message,),
    {"DESCRIPTOR": _PRICECHANGETARIFFPRICEPACK, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(PriceChangeTariffPricePack)
Tariff = _reflection.GeneratedProtocolMessageType(
    "Tariff", (_message.Message,), {"DESCRIPTOR": _TARIFF, "__module__": "tariff_pb2"}
)
_sym_db.RegisterMessage(Tariff)
TariffFeatures = _reflection.GeneratedProtocolMessageType(
    "TariffFeatures",
    (_message.Message,),
    {"DESCRIPTOR": _TARIFFFEATURES, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(TariffFeatures)
PricePack = _reflection.GeneratedProtocolMessageType(
    "PricePack",
    (_message.Message,),
    {"DESCRIPTOR": _PRICEPACK, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(PricePack)
UnitRate = _reflection.GeneratedProtocolMessageType(
    "UnitRate",
    (_message.Message,),
    {"DESCRIPTOR": _UNITRATE, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(UnitRate)
StandingCharge = _reflection.GeneratedProtocolMessageType(
    "StandingCharge",
    (_message.Message,),
    {"DESCRIPTOR": _STANDINGCHARGE, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(StandingCharge)
PriceChange = _reflection.GeneratedProtocolMessageType(
    "PriceChange",
    (_message.Message,),
    {"DESCRIPTOR": _PRICECHANGE, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(PriceChange)
Review = _reflection.GeneratedProtocolMessageType(
    "Review", (_message.Message,), {"DESCRIPTOR": _REVIEW, "__module__": "tariff_pb2"}
)
_sym_db.RegisterMessage(Review)
OrchestrationSteps = _reflection.GeneratedProtocolMessageType(
    "OrchestrationSteps",
    (_message.Message,),
    {"DESCRIPTOR": _ORCHESTRATIONSTEPS, "__module__": "tariff_pb2"},
)
_sym_db.RegisterMessage(OrchestrationSteps)
_TARIFFSERVICE = DESCRIPTOR.services_by_name["TariffService"]
if _descriptor._USE_C_DESCRIPTORS == False:
    DESCRIPTOR._options = None
    _FUELTYPE._serialized_start = 2513
    _FUELTYPE._serialized_end = 2567
    _TARIFFTYPE._serialized_start = 2569
    _TARIFFTYPE._serialized_end = 2626
    _PUBLICATIONSTATUS._serialized_start = 2628
    _PUBLICATIONSTATUS._serialized_end = 2726
    _PAYMENTMETHOD._serialized_start = 2728
    _PAYMENTMETHOD._serialized_end = 2789
    _INTERVAL._serialized_start = 2791
    _INTERVAL._serialized_end = 2845
    _UNIT._serialized_start = 2847
    _UNIT._serialized_end = 2880
    _LISTTARIFFSREQUEST._serialized_start = 160
    _LISTTARIFFSREQUEST._serialized_end = 180
    _LISTTARIFFSRESPONSE._serialized_start = 182
    _LISTTARIFFSRESPONSE._serialized_end = 244
    _BATCHGETTARIFFSREQUEST._serialized_start = 247
    _BATCHGETTARIFFSREQUEST._serialized_end = 387
    _BATCHGETTARIFFSRESPONSE._serialized_start = 389
    _BATCHGETTARIFFSRESPONSE._serialized_end = 455
    _GETTARIFFREQUEST._serialized_start = 457
    _GETTARIFFREQUEST._serialized_end = 494
    _UPDATETARIFFREQUEST._serialized_start = 496
    _UPDATETARIFFREQUEST._serialized_end = 606
    _GETRATESFORTARIFFREQUEST._serialized_start = 608
    _GETRATESFORTARIFFREQUEST._serialized_end = 721
    _PRICECHANGETARIFFPRICEPACK._serialized_start = 723
    _PRICECHANGETARIFFPRICEPACK._serialized_end = 842
    _TARIFF._serialized_start = 845
    _TARIFF._serialized_end = 1329
    _TARIFFFEATURES._serialized_start = 1331
    _TARIFFFEATURES._serialized_end = 1433
    _PRICEPACK._serialized_start = 1436
    _PRICEPACK._serialized_end = 1770
    _UNITRATE._serialized_start = 1772
    _UNITRATE._serialized_end = 1873
    _STANDINGCHARGE._serialized_start = 1875
    _STANDINGCHARGE._serialized_end = 1950
    _PRICECHANGE._serialized_start = 1953
    _PRICECHANGE._serialized_end = 2346
    _REVIEW._serialized_start = 2348
    _REVIEW._serialized_end = 2392
    _ORCHESTRATIONSTEPS._serialized_start = 2394
    _ORCHESTRATIONSTEPS._serialized_end = 2511
    _TARIFFSERVICE._serialized_start = 2883
    _TARIFFSERVICE._serialized_end = 3446
